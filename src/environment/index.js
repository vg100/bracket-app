import {DevEnvironment} from './dev.env';
import {ProdEnvironment} from './prod.env';
export function getEnvVariable(){
    if (__DEV__) {
      return DevEnvironment;
    } else {
      return ProdEnvironment;
    }
}