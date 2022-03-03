import { useDispatch } from "react-redux";
import { addCommentThunk } from "./store/modules/user/thunks";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Container, ContentComment } from "./styles";
import GlobalStyles from './global.js'
const App=()=> {
  const dispatch = useDispatch()
  const user = useSelector((store)=>store.user)
  
  const handleComent =(e)=>{
    e.preventDefault()
    dispatch(addCommentThunk(commentUser))
    console.log(user)
  }
  const [commentUser , SetCommentUser] = useState("")
  return (
    <>
      <GlobalStyles/>
      <Container>
        <h2>{user.name}</h2>
        
        {user.comments.map((comment)=>
          (
            <ContentComment key={comment}>
                <p>{comment}</p>
            </ContentComment >
          )
        )}
      
      <form onSubmit={handleComent}>
      <input type="text" onChange={(e)=> SetCommentUser(e.target.value)}></input>
      <button type="submit"> comentario</button>
      </form>
      </Container>
    </>
  );
}

export default App;
