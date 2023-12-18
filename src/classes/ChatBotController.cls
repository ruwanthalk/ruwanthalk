/**
 * Created by Ruwantha on 14/12/2023.
 */

public with sharing class ChatBotController {

    public static final String BOT_MESSAGE_CSS = 'bot-message';
    public static final String USER_MESSAGE_CSS = 'user-message';
    public static final String USER_ROLE = 'user';
    public static final String ASSISTANT_ROLE = 'assistant';
    public static final String SYSTEM_ROLE = 'system';
    public static final String CHATGPT_MODEL = 'gpt-3.5-turbo';
    public static final String API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
    public static final String API_KEY = getAPIKey();
    public static final Integer MAX_TOKEN = 100;
    public static final Integer TEMPERATURE = 1;
    public static final String APPLICATION_CONFIGURATION_CHATGPT_API_KEY_TYPE = 'ChatGPT API Key';


    public ChatBotController(){

    }

    @AuraEnabled(Cacheable=true)
    public static JsMessage processChat(List<JsMessage>  messages ) {
        List<MessageWrapper> requestMessageWrappers = new List<MessageWrapper>();
        JsMessage tempJsResponseMessage;
        List<JsMessage>  jsResponseMessages = new List<JsMessage>();
        MessageWrapper requestMessageWrapper;
        MessageWrapper responseMessageWrapper;
        requestMessageWrappers.add(systemMessage());
        RequestBody body;
        for(JsMessage jsMessages : messages){
            requestMessageWrapper = new MessageWrapper();
            requestMessageWrapper.role = jsMessages.cssClass == BOT_MESSAGE_CSS? ASSISTANT_ROLE : USER_ROLE;
            requestMessageWrapper.content = jsMessages.content;
            requestMessageWrappers.add(requestMessageWrapper);
        }

        if(requestMessageWrappers != null && requestMessageWrappers.size() > 1){
            body = createRequestBody(requestMessageWrappers,MAX_TOKEN,TEMPERATURE);
        }

        responseMessageWrapper = sendRequest(body);
        requestMessageWrappers.remove(0);


        if(responseMessageWrapper != null){
//            requestMessageWrappers.add(responseMessageWrapper);
            tempJsResponseMessage = new JsMessage();
            tempJsResponseMessage.id = messages.size()+1;
            tempJsResponseMessage.content = responseMessageWrapper.content;
            tempJsResponseMessage.cssClass = responseMessageWrapper.role == ASSISTANT_ROLE? BOT_MESSAGE_CSS : USER_MESSAGE_CSS;
            return tempJsResponseMessage;
        }
        return null;

    }

    public static MessageWrapper systemMessage(){
        MessageWrapper messageWrapper = new MessageWrapper();
        messageWrapper.role = SYSTEM_ROLE;
        messageWrapper.content = 'You are a helpful Travel assistant.';

        return messageWrapper;
    }


    /**
     * Class to wrap chat gpt message
     * holds role , content
     */
    class MessageWrapper{
        public String role {get;set;}
        public String content {get;set;}
    }


    class RequestBody{
        public String model {get;set;}
        public Integer max_tokens {get;set;}
        public Integer temperature {get;set;}
        public List<MessageWrapper> messages {get;set;}

        RequestBody(){
            max_tokens = 7;
            temperature = 1;
        }
    }
    /**
     * @param messageWrappers list of MessageWrapper wrappers
     * @param maxToken if token needs to be increased max token
     * @param temperature if need to change the temperature
     *
     * @return RequestBody wrapper with ChatGPT request body
     */
    public static RequestBody createRequestBody(List<MessageWrapper> messageWrappers, Integer maxToken, Integer temperature){
        RequestBody body;
        body = new RequestBody();
        body.model = CHATGPT_MODEL;
        body.messages = messageWrappers;
        if(maxToken != null){
            body.max_tokens = maxToken;
        }
        if(temperature != null){
            body.temperature = temperature;
        }

        return body;
    }
    public static MessageWrapper sendRequest(RequestBody body){
        MessageWrapper messageWrapper;
        HttpRequest req = new HttpRequest();
        req.setEndpoint(API_ENDPOINT);
        req.setMethod('POST');

        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + API_KEY);
        req.setBody(JSON.serialize(body));
        Http http = new Http();
        HttpResponse res = http.send(req);



        if (res.getStatusCode() == 200) {

            String jsonResponse;

            Map<String, Object> responseData = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());

            jsonResponse = res.getBody().replace('"object":', '"objectType":');
            ChatGPTResponse response = (ChatGPTResponse) JSON.deserialize(jsonResponse, ChatGPTResponse.class);

            System.debug(response.choices[0].message.content);
            System.debug(response.choices[0].message.role);
            messageWrapper = new MessageWrapper();
            messageWrapper.role = response.choices[0].message.role;
            messageWrapper.content = response.choices[0].message.content;
            return  messageWrapper;
        } else {
            // Handle errors
            System.debug('Error from ChatGPT API: ' + res.getBody());
        }
        return messageWrapper;
    }
    public static void processResponse(){

    }

    public static String getAPIKey(){
        String APIKey ='';

        List<Application_Configuration__mdt> applicationConfigurations = [SELECT Value__c FROM Application_Configuration__mdt WHERE Type__c = :APPLICATION_CONFIGURATION_CHATGPT_API_KEY_TYPE LIMIT 1];

        return applicationConfigurations[0].Value__c;
    }

    /**
     * Wrapper class to old js iteration id, content, cssClass to identify if it is a user or bot message
     */
    class JsMessage{
        @AuraEnabled
        public Integer id {get;set;}
        @AuraEnabled
        public String content {get;set;}
        @AuraEnabled
        public String cssClass {get;set;}
    }

    public class Choice {
        public Integer index;
        public Message message;
        public Object logprobs; // Use Object if the structure is not known or varies
        public String finish_reason;
    }

    public class Message {
        public String role;
        public String content;
    }
    public class ChatGPTResponse {
        public String id;
        public String objectType;
        public Integer created;
        public String model;
        public List<Choice> choices;


    }
}