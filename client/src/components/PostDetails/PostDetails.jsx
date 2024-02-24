import React , {useEffect} from 'react' ; 
import { Typography, CircularProgress, Divider } from '@mui/material';
import {useDispatch , useSelector} from 'react-redux' 
import moment from 'moment' ; 
import {useParams, useNavigate, Link} from 'react-router-dom' ; 
import { getPost, getPostBySearch, getPostsByCreator } from '../../actions/posts' ; 
import  { MainCard, Card, Tags, CreatorName , Dividers, ImageSection, RecommendPost, Loading , StylePostDetails} from './styles' ; 
import CommentSection from './CommentSection';


export default function PostDetails() { 

    const defaultImage = 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'; 
    const dispatch = useDispatch() ; 
    const navigate = useNavigate() ; 

    const {post , posts , isLoading} = useSelector((state) => state.posts) ;
    const {id} = useParams() ; 

    // GET POST BY ID 
    useEffect(() => {
        dispatch(getPost(id)) ; 
    } , [id , dispatch]) ;   // dispatch warning hatane ke liye 

    
    // SEARCH BY TAGS TO RECOMMENT POSTS 
    useEffect(() => {
        if (post) { 
            dispatch(getPostBySearch({ search: 'none', tags: post?.tags.join(',') }));
        }
    }, [post, dispatch]); // dispatch warning hatane ke liye 

    // FOR OPEN THE RECOMMEND POST 
    const openPost = (id) => navigate.push(`/posts/${id}`) ; 

    // IF THEIR IS NO POST 
    if(! post) return null ; 

    // IF LOADING 
    if(isLoading)
    {
        return (
            <Loading elevation={6}>
                <CircularProgress size="7em" />
            </Loading>
        )
    }

    // RECOMMEND POSTS MAI CURRENT POST NAHI AANA CHAIYE 
    const recommendedPosts = posts?.filter(({ _id }) => _id !== post._id);

    // // CREATOR POSTS HANDLER 
    const creatorPostsHandler = async () =>
    {
        const creatorId = post.creator ; 
        dispatch(getPostsByCreator(creatorId , navigate)) ; 
    }


    console.log(recommendedPosts) ; 

  return (

      <MainCard elevation={6}>

        <Card>

              <StylePostDetails>

                {/* TITLE OF THE POST */}
                <Typography variant="h3" component="h2"> {post.title} </Typography>

                {/* TAGS OF THE POST */}
                  <Typography gutterBottom variant="h6" color="textSecondary" component="h2" >
                    {
                        post.tags.map((tag) => (
                            <Link to={`/tags/${tag}`} key={post.tags}>
                                <Tags>
                                    {`#${tag} `}
                                </Tags>
                            </Link>
                        ))
                    }
                </Typography>

                {/* MESSAGE OF THE POST */}
                <Typography gutterBottom variant="body1" component="p">
                    {post.message}
                </Typography>

                {/* CREATOR NAME */}
                <Typography variant="h6">
                    Created by : 
                      <Link to={`/creators/${post.creator}`}onClick={creatorPostsHandler}> 
                        <CreatorName>
                            {` ${post.name}`}
                        </CreatorName>
                    </Link>
                </Typography>

                {/* TIME  */}
                <Typography variant="body1"> {moment(post.createdAt).fromNow()}</Typography>

                {/* DIVIDER */}
                <Divider/> 

                {/* COMMENT SECTION */}
                <CommentSection post={post}/>

                {/* DIVIDER */}
                <Divider/>
            </StylePostDetails>

              {/* IMAGE SECTION */}
              <ImageSection>
                <Media src={post.selectedFile || defaultImage} alt={post.title} />
              </ImageSection>
        </Card>

        {/* RECOMMENDATION OF POSTS */}
          {(

              <PostDetails>

                  <Typography variant="h5" gutterBottom> {recommendedPosts?.length ? 'You might also like' : null} </Typography>

                <Divider />

                {/* RECOMMEND POST CARDS */}
                <RecommendPost>
                    {
                        recommendedPosts?.map(({title, name, message, likes , selectedFile , _id}) => (
                            
                        <RecPost onClick={() => openPost(_id)} key={_id} elevation={6}>

                            <div>
                            <Typography variant="h6" gutterBottom> {title}</Typography>
                            <Typography variant="subtitle2" gutterBottom> {name}</Typography>
                            <Typography variant="subtitle2" gutterBottom> {`${message.split(" ").slice(0 , 40).join(" ")}...`}</Typography>
                            <Typography variant="subtitle1" gutterBottom> Likes : {likes.length}</Typography>
                            </div>
                            <Image src={selectedFile || defaultImage} alt={name} width="200px" />
                        </RecPost>
                    ))}
                </RecommendPost>
            </PostDetails>
        )}

    </MainCard>
  )
}
