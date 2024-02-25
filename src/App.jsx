import { Greetings } from "./Greetings";

export function App()
{
    //return 2+10.2323;
    //return "Hello World from Siddhant"

    // Data Types which react can render
    //String,Float,Int Including the maths operations. Arrays, JSX {Components}, existing HTML tags, Custom Components.
    
    // Datatypes which react can't render - Object,Null,Undefined,Boolean {Ignored},

    // return (           // ----- only parent class can exist in the JSX file.
    // <div>
    //     <input id='Username' type="text" />
    //     <br></br>
    //     <input id='Password' type="text" />
    // </div>
    // );

    // return (
    //     <>
    //     <input type="integer" />
    //     <br/>
    //     <input type="integer" />
    //     </>
    // )

return (
    <>
    <Greetings />
    <input type="text"></input>
    </>
);
}