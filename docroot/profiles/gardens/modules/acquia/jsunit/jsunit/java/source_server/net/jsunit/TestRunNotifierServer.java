package net.jsunit;

import net.jsunit.model.Browser;
import net.jsunit.model.BrowserResult;
import net.jsunit.utility.XmlUtility;

public class TestRunNotifierServer implements TestRunListener {

    private ServerSideConnection serverSideConnection;

    public TestRunNotifierServer(BrowserTestRunner runner, int port) {
        serverSideConnection = new ServerSideConnection(new StopMessageReceiver(runner), port);
    }

    public void browserTestRunStarted(Browser browser) {
        serverSideConnection.sendMessage(RemoteTestRunClient.BROWSER_TEST_RUN_STARTED);
        serverSideConnection.sendMessage(String.valueOf(browser.getId()));
    }

    public void browserTestRunFinished(Browser browser, BrowserResult result) {
        serverSideConnection.sendMessage(RemoteTestRunClient.BROWSER_TEST_RUN_FINISHED);
        serverSideConnection.sendMessage(String.valueOf(browser.getId()));
        serverSideConnection.sendMessage(XmlUtility.asString(result.asXmlDocument()));
        serverSideConnection.sendMessage(RemoteTestRunClient.END_XML);
    }

    public void testRunStarted() {
        serverSideConnection.connect();
        serverSideConnection.sendMessage(RemoteTestRunClient.TEST_RUN_STARTED);
    }

    public void testRunFinished() {
        serverSideConnection.sendMessage(RemoteTestRunClient.TEST_RUN_FINISHED);
        serverSideConnection.shutDown();
    }

    public boolean isReady() {
        return serverSideConnection.isConnected();
    }

    static class StopMessageReceiver implements MessageReceiver {

        private final BrowserTestRunner runner;

        public StopMessageReceiver(BrowserTestRunner runner) {
            this.runner = runner;
        }

        public void messageReceived(String message) {
            if ("stop".equals(message)) {
                runner.dispose();
            }
        }

    }

}
