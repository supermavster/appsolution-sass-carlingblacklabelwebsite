package net.jsunit.interceptor;

import com.opensymphony.xwork.Action;
import junit.framework.TestCase;
import net.jsunit.RemoteMachineServerHitter;
import net.jsunit.RemoteServerHitter;
import net.jsunit.action.RemoteRunnerHitterAware;

public class RemoteServerHitterInterceptorTest extends TestCase {

    public void testSimple() throws Exception {
        RemoteServerHitterInterceptor interceptor = new RemoteServerHitterInterceptor();
        MockAction action = new MockAction();
        MockActionInvocation invocation = new MockActionInvocation(action);
        interceptor.intercept(invocation);
        assertNotNull(action.hitter);
        assertTrue(action.hitter instanceof RemoteMachineServerHitter);
    }

    static class MockAction implements RemoteRunnerHitterAware, Action {

        private RemoteServerHitter hitter;

        public String execute() throws Exception {
            return null;
        }

        public void setRemoteServerHitter(RemoteServerHitter hitter) {
            this.hitter = hitter;
        }

    }

}
