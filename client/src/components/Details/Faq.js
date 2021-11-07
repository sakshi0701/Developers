import React,{useState,useEffect} from 'react';
import './Faq.css';
import { Collapse } from 'antd';
import { Input, Space } from 'antd';
const { Panel } = Collapse;
const { Search } = Input;

const getLocalItems=()=>{
    let list = localStorage.getItem('lists');
    console.log(list);
    if(list){
        return JSON.parse(localStorage.getItem('lists'));  //in the form string
    } else{
        return [];
    }
}

export default function Faq() {
    const panelStyle={
        fontSize:"1.3rem", 
        padding:"5px" 
    }
    const pStyle={
        fontSize:"1.1rem",
        backgroundColor:"#fff",
        padding:"1.2rem 0 0 1.5rem",
        opacity:"0.9",
        boxShadow:'0 1px 2px rgba(0,0,0,0.1)'
    }
    const [doubt,setDoubt] = useState('');
    const [tasks,setTasks] = useState(getLocalItems());

    useEffect(()=>{
       localStorage.setItem('lists',JSON.stringify(tasks))
    },[tasks])
    return (
        <div className="block faqBlock">
            <div className="container-box">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                    <p>Ask your doubts</p>
                </div>
                <Collapse defaultActiveKey={['1']}>
                    <Panel style={panelStyle} header="What about warranty?" key="1">
                        <p style={pStyle}>Yes,there is warranty!1 year
                            manufacturer warranty for device and 6 months
                            manufacturer warranty for in-box accessories including
                            batteries from the date of purchase</p>
                    </Panel>
                    <Panel style={panelStyle} header="Is there any different color?" key="2">
                        <p style={pStyle}>Yes,in Light pink,goldenrod,navy blue etc.</p>
                    </Panel>
                    <Panel style={panelStyle} header="What is the screen size?" key="3">
                        <p style={pStyle}>6.43 inches</p>
                    </Panel>
                    <Panel style={panelStyle} header="What about camera features?" key="4">
                        <p style={pStyle}>Triple Rear Camera (64 MP + 8 MP + 2 MP) | 16 MP Front Camera</p>
                    </Panel>
                    <Panel style={panelStyle} header="Does it has screen recorder??" key="5">
                        <p style={pStyle}>Yes , inbuilt screen recorder is present. No need to install any 3rd party app.</p>
                    </Panel>
                </Collapse>
                <div className="ask">
                    <div className="container">
                        <p>Ask for any doubt</p>
                        <form  onSubmit={(e)=>{
                            e.preventDefault();
                            console.log({doubt});
                            setTasks([ ... tasks,{
                                id:Math.floor(Math.random()*10)+1,
                                doubt:doubt
                            }])
                            
                        }}>
                        <input type="text" value={doubt} onChange={(e)=>setDoubt(e.target.value)} placeholder="Have any questions?Clear your doubts"></input>
                        </form>
                    </div>
                    <div className="doubts">
                        {
                            tasks.map(task=>(
                               <li className="doubt" key={task.id}><span style={{fontWeight:"bold"}}>Q.</span>{task.doubt}</li>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
