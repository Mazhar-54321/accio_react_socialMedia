import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/postsSlice';
import './Home.css'
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);
  const [inputText,setInputText]=useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if(!posts?.length)
    dispatch(fetchPosts());
  }, []);
  const postClickHandler = (el)=>{
  navigate(`/item/${el?.id}`);
  }
  return (
    <div className='home-container'>
      <h1>Social Media For Travellers</h1>
      <input value={inputText} onChange={(event)=>setInputText(event.target.value)}  type='text' placeholder='Search...' />
      <div className='post-container'>
      {
        posts?.filter((el)=>el?.title?.toLowerCase()?.includes(inputText?.trim()?.toLowerCase()))?.map((el)=>(
          <div onClick={()=>postClickHandler(el)} key={el?.id} className='post'>
            <img  src={`https://picsum.photos/200?random=${el.id}`}/>
            <div className='description-container'>
              <h3 title={el?.title}>{el?.title?.length>15?`${el?.title?.substring(0,15)}...`:el?.title}</h3>
              <div className='description-insight'>
                <p title={el?.body}>{`${el?.body?.substring(0,50)}`}<span className='read-more'>Read more...</span></p>
                <p className='arrow'>></p>
              </div>
            </div>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default Home