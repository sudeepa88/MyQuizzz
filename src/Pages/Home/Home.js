import React, {useState} from 'react';
import photo from "../../Images/Career-Software-Engineer.png"
import "./Home.css";
import { Button, MenuItem, TextField } from '@material-ui/core';
import Categories from '../../Data/Categories';
import { useHistory } from 'react-router';
import ErrorMessage  from "../../Components/ErroMessage/ErrorMessage";
 const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState(" ");
    const [difficulty, setDifficulty ] = useState("");
    const [error, setError ] = useState(false);

    const history = useHistory();

    const handleSubmit =()=>{
        if(!category|| !difficulty || !name){
            setError(true);
            return;
        }
        else{
            setError(false);
            fetchQuestions(category,difficulty);
            history.push('/quiz');
        }
    };
    return (
        <div className="content">
            <div className="settings">
                <span style={{fontSize: 30}}>Quiz Settings</span>
                <div className="settings_select">
                    {error && <ErrorMessage> Please Fill All The fields</ErrorMessage>}
                    <TextField style={{marginBottom: 100, backgroundColor:"gray"}}   label="Enter Your Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
                     <TextField select label="Select Category" value={category} onChange={(e) => setCategory(e.target.value)} variant="outlined" style={{marginBottom: 100, backgroundColor:"gray"}}  > 

                        {
                            Categories.map((cat)=>(
                                <MenuItem key={cat.category} value={cat.value}>
                                    {cat.category}
           

                          </MenuItem>   
                            

                            ))
                        }
                     </TextField>


                     <TextField 
                     select
                     label="select Difficulty"
                     value={difficulty}
                     onChange={(e) => setDifficulty(e.target.value)}
                     
                     variant="outlined"
                     style={{marginBottom: 30, backgroundColor:"gray"}}>
                         <MenuItem key="Easy" value="easy">
                         Easy
                         </MenuItem>

                         <MenuItem key="Medium" value="medium">
                         Medium
                         </MenuItem>

                         <MenuItem key="Hard" value="hard">
                         Hard
                         </MenuItem>

                     </TextField>
                     <Button variant='contained' color="primary" size="large" 
                      onClick={handleSubmit}
                     >
                         Start Quiz
                         </Button>
                </div>
            </div>
            <img alt="cannot cought" src={photo} className="banner"/>
        </div>
    )
}
export default Home;