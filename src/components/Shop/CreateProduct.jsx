import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../../static/data';

const CreateProduct = () => {
    const { seller } = useSelector((state) => state.seller);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleImageChange = (e) => {
        e.preventDefault();
        let files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files])

    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }


    return (
        <div className='w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll'>
            <h5 className='text-[30px] font-Poppins text-center'>Create Product</h5>
            <form onSubmit={handleSubmit}>
                <br />
                <div>
                    <label className='pb-2'>Name <span className='text-red-500'>*</span></label>
                    <input className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your product name..." />
                </div>
                <br />
                <div>
                    <label className='pb-2'>Description <span className='text-red-500'>*</span></label>
                    <input className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' name='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your product descriptions..." />
                </div>
                <br />
                <div>
                    <label className='pb-2'>Category <span className='text-red-500'>*</span></label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full mt-2 border h-[35px] rounded-[5px] '>
                        <option>Choose a category</option>
                        {
                            categoriesData && categoriesData.map((i, index) => (<option key={index} value={i.title}>
                                {i.title}
                            </option>))
                        }
                    </select>
                </div>
                <br />
                <div>
                    <label className='pb-2'>Tags</label>
                    <input className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' name='tags' value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Enter your product tags..." />
                </div>
                <br />
                <div>
                    <label className='pb-2'>Original Price</label>
                    <input type="number" className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' name='originalPrice' value={originalPrice} onChange={(e) => setOriginalPrice(e.target.value)} placeholder="Enter your product price ..." />
                </div>
                <br />
                <div>
                    <label className='pb-2'>Price(with discount) <span className='text-red-500'>*</span></label>
                    <input type="number" className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' name='discountPrice' value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} placeholder="Enter your product price with discount..." />
                </div>
                <br />
                <div>
                    <label className='pb-2'>Product Stock <span className='text-red-500'>*</span></label>
                    <input type="number" className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' name='stock' value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Enter your product stock..." />
                </div>
                <br />
                <div>
                    <label className='pb-2'>Upload Images <span className='text-red-500'>*</span></label>
                    <input type="file" id="upload" className='hidden' multiple onChange={handleImageChange} />
                    <div className='w-full flex items-center flex-wrap'>
                        <label htmlFor='upload'>
                            <AiOutlinePlusCircle color="#555" size={30} className='mt-3' />
                        </label>
                        {
                            images && images.map((i, index) => (<img className='h-[120px] w-[120px] object-cover m-2' key={index} src={URL.createObjectURL(i)} alt='' />))
                        }
                    </div>
                    <br />
                    <div>
                        <input className='mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="submit" value="Create" />
                    </div>
                </div>



            </form>
        </div>
    )
}

export default CreateProduct
