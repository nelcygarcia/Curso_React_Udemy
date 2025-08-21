import type { CSSProperties } from "react";


    const firstName = 'Nelcy';
    const lastName = 'García';

    const favoriteGames = ['Elden Ring','Smash','Metal Gear'];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'Canada'

         }

    const myStyles: CSSProperties = {
        backgroundColor:'#fafafa',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,

    };



export const MyAwesomeApp = () => {
return(

 <>
<h1> {firstName}</h1>
<h3>{lastName}</h3>
<p>{favoriteGames.join(', ')}</p>
<p>{2+2}</p>
<h1>{isActive ? 'Activo' : 'No Activo'}</h1>
<p style={myStyles} >{JSON.stringify(address)}</p>
 </>

);
};












// export function MyAwesomeApp() {
//     return (

// <>
// <h1>Nelcy</h1>
// <h3>García</h3>
// </>
//     );
// }