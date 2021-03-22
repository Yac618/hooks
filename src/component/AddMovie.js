import React, { useState } from 'react'
import Modal from 'react-modal'
import MovieRating from './MovieRating';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root')

const AddMovie = ({handleAdd}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
  const [form, setForm] = useState({
      title:"",
      date:"",
      image:"",
      rating:1
  })
 const  handleChange = (e) => setForm({...form , [e.target.name]:e.target.value})
 const handleRating = (rate) => setForm({...form,rating:rate})
    return (
        <div>
            <button className="btn add-movie-btn" onClick={openModal}>Open Modal</button>
            <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
        >
            <form  onSubmit={(e)=>{
                e.preventDefault();
                let newMovie = {
                    ...form,
                    id: Math.random()
                }
                handleAdd(newMovie);
                closeModal()
            }}>
                <label> Movie name </label>
                <input type="text" value={form.name} name="title" onChange={handleChange} />
                <label> Date of release </label>
                <input type="date" value={form.date} name="date" onChange={handleChange}/>
                <label> rating </label>
                <MovieRating rating={form.rating} handleRating={handleRating} />
                <label> Movie poster </label>
                <input type="url"  value={form.image} name="image" onChange={handleChange}/>
                <div>
                    <button className="btn btn-primary" type="submit" >Add </button>
                    <button className="btn btn-danger" onClick={closeModal}>cancel</button>
                    
                </div>
            </form>
        </Modal>
        </div>
    )
}

export default AddMovie
