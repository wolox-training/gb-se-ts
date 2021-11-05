import {BeforeStep} from '@cucumber/cucumber'

//Cucumber Hooks

BeforeStep(()=>{
    setTimeout(() => { console.log("World!"); }, 2000);
})