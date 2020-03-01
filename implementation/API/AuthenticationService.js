import Fetcher from '../../helpers/Fetcher';

export default class AuthenticationService {


    async login(requestObj){
        return await Fetcher('http://10.0.0.33:3000/api/login',"POST",requestObj)
    }
}