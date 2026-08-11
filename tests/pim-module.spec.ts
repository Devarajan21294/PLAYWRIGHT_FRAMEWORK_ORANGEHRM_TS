import{expect, test} from '../fixtures/hooks-fixture'
import pimData from '../data/pim-module-data.json'


test('[PIM] Verify that a new Employee is  succesfully created under the Pim module ',{
      tag: ['@Smoke','@UI'],
    annotation: {
        type: 'TestCaseLink',
        description:'Testcase_Link'
    }},async({gotoUrl,pimPage,leftNavigationPage})=>{
       await test.step("Open Pim Module", async()=>{
           await leftNavigationPage.openPimModule();
        })

       await test.step(" add Employee", async()=>{
            await pimPage.addEmployee(pimData.first_name,pimData.middle_name,pimData.last_name);
            await expect(pimPage.newEmployeeNameHeading).toHaveText(`${pimData.first_name} ${pimData.last_name}`)
        })
   
 
}) 