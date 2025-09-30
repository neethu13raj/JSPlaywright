
import { test } from "@playwright/test";


test.describe('', async() => {

    test.beforeAll('', async() => {

        console.log(" Executes beforeAll");
        
    })

    test.beforeEach('',async({page}) => {
        console.log("Executes before each test block");
        
    })

    test.afterEach('', async({page}) => {
        console.log("Executes after each test block");
        
    })

    test.afterAll('', async() => {
        console.log("Executes after all executions");
        
    })

    test('Test 1', async({page}) => {
        console.log("TEST 1");
        
    })
    test('Test 2', async({page}) =>{
        console.log("TEST 2");
        
    })

}) 