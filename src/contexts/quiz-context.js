import {createContext, useContext, useReducer, useEffect} from 'react'
import axios from "axios";
import { quizzReducer } from '../reducers/quiz-reducer';

const QuizzContext = createContext();

const QuizzContextProvider = ({children}) => {
    const [quizzState, quizzDispatch] = useReducer(quizzReducer, {
        questionData : [],
        category : null,
        categoryValue : null,
        image : null,
        level : null,
        currentQue : 0,
        options : [],
    })
    useEffect(()=>{
        const questionData = async() => {
            try{
                const {data : {results}} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${quizzState.categoryValue}&difficulty=${quizzState.level}&type=multiple`)
                console.log(results)
                quizzDispatch({type : "SET_QUESTIONS", payload: results})
            } catch(err){
                console.log(err)
            }
        }
        questionData()
    },[quizzState.level, quizzState.categoryValue])
    return(
        <QuizzContext.Provider value={{quizzState, quizzDispatch}}>
            {children}
        </QuizzContext.Provider>
    )
}

const useQuizzContext = () => useContext(QuizzContext)

export {QuizzContextProvider, useQuizzContext}