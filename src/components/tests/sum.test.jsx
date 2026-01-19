import { expect } from "vitest";
import {sum} from "../sum";
test("sum function should calculate sum of two numnbers",()=>{
    const result=sum(3,4);

    // assertion
    expect(result).toBe(7);
})