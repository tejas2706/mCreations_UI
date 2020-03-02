import React from 'react';
import { Alert } from "react-native";
import 'whatwg-fetch'

let Fetcher = function(path, method="GET", body, init=null){
    if(!init){
        let headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1jcmVhdGlvbnMiLCJpYXQiOjE1ODI2NTU5NjYsImV4cCI6MTU4Mjc0MjM2Nn0.-vx88HfQLmKMyJ2dnU4YoqR1_ty6asjMuFACH5vamvk"
        });

        init = { method: method,    
            headers: headers
        };

        if(method == "POST" || method=="PUT"){
            init.body = JSON.stringify(body)
        }
    }

    return fetch(path, init)
        .then(function(response){
            if(response.status == 404){
                throw response;
            }
            return response.json();
        })
        .then(function(response){
            if(response != null){
                if(response.error){
                    Alert.error(response.error);
                }
                if(response.message){
                    Alert.info(response.message);

                }
            }
            return response;
        });
};
export default Fetcher;
