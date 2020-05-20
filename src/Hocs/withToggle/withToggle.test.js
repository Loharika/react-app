/*global expect*/

import React from "react";
import { render,fireEvent} from "@testing-library/react";
import ViewEditToggle from '../../components/AdvancedConcepts/ViewEditToggle';
describe("withToggle Test Cases",()=>{
   it("it should check the onToggle function",()=>{
       const {getByText} =render(<ViewEditToggle />);
       const toggleButton=getByText('Edit');
       fireEvent.click(toggleButton);
       expect(getByText('Cancel')).toBeInTheDocument();
       fireEvent.click(toggleButton);
       expect(getByText('Edit')).toBeInTheDocument();
   });
   
});