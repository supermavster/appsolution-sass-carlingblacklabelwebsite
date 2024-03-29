package net.jsunit.model;

import net.jsunit.utility.XmlUtility;
import org.jdom.Attribute;
import org.jdom.Document;
import org.jdom.Element;
import org.jdom.input.SAXBuilder;

import java.io.File;
import java.util.List;

public class BrowserResultBuilder {

    public BrowserResult build(File file) {
        try {
            Document document = new SAXBuilder().build(file);
            return build(document);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public BrowserResult build(String string) {
        Document document = XmlUtility.asXmlDocument(string);
        return build(document);
    }

    @SuppressWarnings("unchecked")
    public BrowserResult build(Document document) {
        Element root = document.getRootElement();
        return build(root);
    }

    @SuppressWarnings("unchecked")
    public BrowserResult build(Element root) {
        BrowserResult result = new BrowserResult();
        ResultType type = ResultType.valueOf(root.getAttribute("type").getValue());
        result._setResultType(type);
        updateWithBrowser(result, root.getChild(Browser.BROWSER));
        updateWithHeaders(result, root);
        updateWithProperties(root.getChild(BrowserResultWriter.PROPERTIES), result);
        Element testCasesElement = root.getChild(BrowserResultWriter.TEST_CASE_RESULTS);
        if (testCasesElement != null) {
            List children = testCasesElement.getChildren(TestCaseResultWriter.TEST_CASE);
            updateWithTestCaseResults(children, result);
        }
        return result;
    }

    private void updateWithBrowser(BrowserResult result, Element browserElement) {
        if (browserElement != null)
            result.setBrowser(Browser.buildFrom(browserElement));
    }

    private boolean failedToLaunch(Element root) {
        Attribute type = root.getAttribute("type");
        return type.getValue().equals(ResultType.FAILED_TO_LAUNCH.name());
    }

    private boolean timedOut(Element root) {
        Attribute type = root.getAttribute("type");
        return type.getValue().equals(ResultType.TIMED_OUT.name());
    }

    private void updateWithHeaders(BrowserResult result, Element element) {
        String id = element.getAttributeValue(BrowserResultWriter.ID);
        if (id != null)
            result.setId(id);
        String time = element.getAttributeValue(BrowserResultWriter.TIME);
        if (time != null)
            result.setTime(Double.parseDouble(time));
    }

    private void updateWithProperties(Element element, BrowserResult result) {
        Integer browserId = null;
        for (Object child : element.getChildren()) {
            Element next = (Element) child;
            String key = next.getAttributeValue(BrowserResultWriter.PROPERTY_KEY);
            String value = next.getAttributeValue(BrowserResultWriter.PROPERTY_VALUE);

            if (BrowserResultWriter.JSUNIT_VERSION.equals(key))
                result.setJsUnitVersion(value);
            else if (BrowserResultWriter.USER_AGENT.equals(key))
                result.setUserAgent(value);
            else if (BrowserResultWriter.REMOTE_ADDRESS.equals(key))
                result.setRemoteAddress(value);
            else if (BrowserResultWriter.URL.equals(key))
                result.setBaseURL(value);
            else if (BrowserResultWriter.USER_PROPERTY.equals(key))
                result.setUserProperty(value);
            else if (BrowserResultWriter.SERVER_SIDE_EXCEPTION_STACK_TRACE.equals(key)) {
                String stackTrace = next.getText();
                result.setServerSideExceptionStackTrace(stackTrace);
            }
        }
    }

    private void updateWithTestCaseResults(List<Element> testCaseElements, BrowserResult result) {
        TestCaseResultBuilder testCaseBuilder = new TestCaseResultBuilder();
        for (Element element : testCaseElements) {
            result.addTestCaseResult(testCaseBuilder.build(element));
        }
    }
}
