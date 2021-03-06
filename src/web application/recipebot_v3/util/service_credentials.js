/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var credentials = {
    'cloudant': {
      "username": "2ac70ef5-fce0-49db-b3c2-a52fbd446d21-bluemix",
      "password": "2a0890ac86f41b86407c892f0bedf05d224dd9a6e43a4961e2148509b13fa882",
      "host": "2ac70ef5-fce0-49db-b3c2-a52fbd446d21-bluemix.cloudant.com",
      "port": 443,
      "url": "https://2ac70ef5-fce0-49db-b3c2-a52fbd446d21-bluemix:2a0890ac86f41b86407c892f0bedf05d224dd9a6e43a4961e2148509b13fa882@2ac70ef5-fce0-49db-b3c2-a52fbd446d21-bluemix.cloudant.com"
    },
    'clearDB':{
      'host':'us-cdbr-sl-dfw-01.cleardb.net',
      'user': 'bbcec353a2bef7',
      'password':'a8da4683',
      'database': 'ibmx_e2d7bb714b1c241'
    },
    'conversation': {
        'username': '978726da-20f0-4a2b-afce-57b71810e0a7',
        'password': '8Nh8dwh7hDLY',
        'workspace_id': '19fc335a-b139-4bab-8631-45247a08e1c6',
        "url" : "https://gateway.watsonplatform.net/conversation/api",
    	"version_date" : "2018-02-19",
    	"version" : "v1"
    },
    'nlu': {
        'url':'https://gateway.watsonplatform.net/natural-language-understanding/api',
        'username': '690433c8-cca5-4938-ae19-be90c5ab1227',
        'password': 'B22ZpZZ3L7QQ'
    },
    'twc': {
        'url': ''
    }
};


//cloudant
credentials.cloudant.url = process.env.CLOUDANT_URL;

//conversation
credentials.conversation.username = process.env.CONVERSATION_USERNAME;
credentials.conversation.password = process.env.CONVERSATION_PASSWORD;
credentials.conversation.workspace_id = process.env.WORKSPACE_ID;

//nlu
credentials.nlu.username = process.env.NLU_USERNAME;
credentials.nlu.password = process.env.NLU_PASSWORD;

//twc
credentials.twc.url = process.env.TWC_URL;

if(process.env.VCAP_SERVICES){
    let services = JSON.parse(process.env.VCAP_SERVICES);

    //cloudant
    if(services.cloudantNoSQLDB){
        credentials.cloudant.url = services.cloudantNoSQLDB[0].credentials.url;
    }

    //conversation
    if(services.conversation){
        let wcs = services.conversation[0].credentials;
        credentials.conversation.username = wcs.username;
        credentials.conversation.password = wcs.password;
        credentials.conversation.workspace_id = process.env.WORKSPACE_ID;
    }
    //nlu
    if(services["natural-language-understanding"]){
        let nlu = services["natural-language-understanding"][0].credentials;
        credentials.nlu.username = nlu.username;
        credentials.nlu.password = nlu.password;
    }
    //twc
    if(services.weatherinsights){
        credentials.twc.url = services.weatherinsights[0].credentials.url;
    }
}

module.exports = credentials;
