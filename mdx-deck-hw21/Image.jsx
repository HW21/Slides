/* 
Place Images in a div which is: 
* 50% of screen height 
* 100% of screen width
Force them to fit, while retaining aspect ratio 
*/

export const ImageWrapper = props => {
    return <div style={{height:'50vh', width:'100vh'}}>
        {props.children}
    </div>
};

export const Image = props => {
    const {src, ...other} = props;
    return <ImageWrapper>
        <img src={`url(${src})`} {...other}/>
    </ImageWrapper>
}
export default Image;

