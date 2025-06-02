import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Item.css'
import { useSelector } from 'react-redux';
import { FiShare2 } from 'react-icons/fi';      
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import { useNavigate } from 'react-router-dom';

const Item = () => {
  const {id} = useParams();
    const navigate = useNavigate();
  
  const [state,setState]=useState({
    currentPost:null,
    remainingPosts:null,
    currentActivity:'body'
  })
  const { posts, loading, error } = useSelector(state => state.posts);
  useEffect(()=>{
   if(posts?.length){
    setState((prev)=>({
      ...prev,
      currentPost:posts?.find((el)=>el?.id==id),
      remainingPosts:posts?.filter((el)=>el?.id!=id)
    }))
   }
  },[posts,id])
  const postClickHandler = (el)=>{
    navigate(`/item/${el?.id}`,{replace:true});
    }
  return (
    <div className='item-container'>
      <div className='navigate'>
        <span onClick={()=>{navigate("/",{replace:true})}} style={{cursor:'pointer',
           width:'20px',height:'20px',textAlign:'center', display:'inline-block', backgroundColor:'white',color:'black',borderRadius:'50%',padding:'5px'}}>&#8592;
        </span>
        <h2>Post Number {id}</h2>
        
      </div>
      {<div className='post-info'>
        <div className='image-container' style={{width:'30%',height:'100%',position:'relative'}}>
        <img src={`https://picsum.photos/200?random=${id}`} style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:'12px',backgroundColor:'white',position:'relative'}} />
        <span style={{position:'absolute',display:'inline-block', bottom:'0px',color:'white', right:'10px'}} >
          
          <FiShare2  style={{width:'24px',height:'24px',}}/>
        </span>
        <span style={{position:'absolute',display:'inline-block', bottom:'0px',color:'white', right:'50px'}}>
           <AiOutlineHeart style={{width:'24px',height:'24px',}} />
        </span>
        <span style={{position:'absolute',bottom:'0px',left:'0px',color:'white',padding:'10px',wordWrap:'break-word',width:'150px'}}>{state?.currentPost?.title}</span>
        </div>
        
         <div className='activity' style={{width:'60%'}}>
          <div className='button-group'>
            <button onClick={()=>setState((prev)=>({...prev,currentActivity:'body'}))}  className={`button-1 ${state?.currentActivity==="body"?'selected':'unselected'}`}>Detail</button>
            <button onClick={()=>setState((prev)=>({...prev,currentActivity:'userId'}))} className={`button-2 ${state?.currentActivity!=="body"?'selected':'unselected'}`}>User Info</button>
          </div>
          <p>{state?.currentActivity==='userId'&&'Post was posted by '}{state?.currentPost?.[state?.currentActivity]}</p>
         </div>
        
         
        
      
        </div>}
        <h2>More Posts</h2>
        <div className='post-container'>
      {
        state?.remainingPosts?.map((el)=>(
          <div onClick={()=>postClickHandler(el)} key={el?.id} className='post'>
            <img  src={`https://picsum.photos/200?random=${el.id}`}/>
            <div className='description-container'>
              <h3 title={el?.title}>{el?.title?.length>15?`${el?.title?.substring(0,15)}...`:el?.title}</h3>
              
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Item