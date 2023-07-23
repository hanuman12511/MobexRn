import {action,computed,makeObservable,observable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
class CreateStore{
      count=0;
      constructor(){
            makeObservable(this,{
                  increment:action,
                  decrement:action,
                  count:observable,
                  getData:computed
            },
            {autoBind:true},
            )
      

      makePersistable(this,{
            name:'counter',
            properties:['count'],
            store: AsyncStorage,
      })
      }
      increment(){
            this.count+=1;
      }
      decrement(){
            this.count-=1;
      }

      get getData(){
            let name="saini";
            return name;
      }
}

export default CreateStore = new CreateStore();