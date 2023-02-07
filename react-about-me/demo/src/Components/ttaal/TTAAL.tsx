import Fact from '../facts/Fact';
import './TTAAL.css';

function TTAAL() {

    // generally this should come from some sort of api or backend
    const facts = [
        {
            id: 1,
            fact: "Ethan was my trainer",
            isTrue: "truth"
        },
        {
            id: 2,
            fact: "I've been to Ireland",
            isTrue: "truth"
        },
        {
            id: 3,
            fact: "I'm 6' tall",
            isTrue: "lie"
        },
        {
            id: 4,
            fact: "I have an orange cat",
            isTrue: "truth"
        }
    ]



    return (
        <main>
            <h3>Two truth and a lie:</h3>
            <table>
                {/* <Fact id={facts[0].id} fact={facts[0].fact} isTrue={facts[0].isTrue}/>
                <Fact id={facts[1].id} fact={facts[1].fact} isTrue={facts[1].isTrue}/>
                <Fact id={facts[2].id} fact={facts[2].fact} isTrue={facts[2].isTrue}/> */}

                {
                    facts.map( fact => {
                        return <Fact id={fact.id} fact={fact.fact} isTrue={fact.isTrue}/>
                    })
                }
            </table>
        </main>
    )
};

export default TTAAL;