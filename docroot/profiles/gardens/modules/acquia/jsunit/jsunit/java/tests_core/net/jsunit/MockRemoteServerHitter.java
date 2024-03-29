/**
 * 
 */
package net.jsunit;

import org.jdom.Document;

import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MockRemoteServerHitter implements RemoteServerHitter {

    public List<String> urlsPassed = new ArrayList<String>();
    public Map<String, Document> urlToDocument = new HashMap<String, Document>();
    private DocumentRetrievalStrategy documentRetrievalStrategy;

    public Document hitURL(URL url) {
        String urlString = url.toString();
        urlsPassed.add(urlString);
        Document document = urlToDocument.get(urlString);
        if (document == null && documentRetrievalStrategy != null)
            return documentRetrievalStrategy.get(url);
        return document;
    }

    public void setDocumentRetrievalStrategy(DocumentRetrievalStrategy strategy) {
        this.documentRetrievalStrategy = strategy;
    }

}