import React,{Component} from 'react'

class Post extends Component{
  render(){
    return (
      <article>
        <h2>lorem ipsum</h2>
        <figure>
          <img src="https://dummyimage.com/600x400/000/fff" alt=""/>
        </figure>
        <section>
          <p>10 Me gusta</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est curabitur senectus, praesent cum lobortis facilisis faucibus aenean mauris maecenas purus, fames eros magna dis auctor himenaeos ultricies tellus viverra. </p>
          <p>Dec 15, 2018</p>
        </section>
        <section>
          <form>
            <input
              name="comment"
              type="text"
              placeholder="Comentario"/>
            <button>Enviar</button>
          </form>
        </section>
        <section>
          <ul>
            <li>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est curabitur senectus, praesent cum lobortis facilisis faucibus aenean mauris maecenas purus, fames eros magna dis auctor himenaeos ultricies tellus viverra. </p>
              <p>Dec 15, 2018</p>
            </li>
            <li>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est curabitur senectus, praesent cum lobortis facilisis faucibus aenean mauris maecenas purus, fames eros magna dis auctor himenaeos ultricies tellus viverra. </p>
              <p>Dec 15, 2018</p>
            </li>
            <li>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit est curabitur senectus, praesent cum lobortis facilisis faucibus aenean mauris maecenas purus, fames eros magna dis auctor himenaeos ultricies tellus viverra. </p>
              <p>Dec 15, 2018</p>
            </li>
          </ul>
        </section>
      </article>
    )
  }

}
export default Post
