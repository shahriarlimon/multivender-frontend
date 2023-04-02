import React, { useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { backend_url } from '../../server'
import styles from '../../styles/styles'

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name)
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("")
  const handleSubmit = () => {

  }
  return (
    <div className='w-full '>
      {/* profile page */}
      {

        active === 1 && <>
          <div className='flex justify-center w-full'>
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
                alt=""
              />
              <div className='w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px] '>
                <AiOutlineCamera />
              </div>
            </div>

          </div>
          <br />
          <br />
          <div className='w-full px-5 '>
            <form onSubmit={handleSubmit} area-required={true}>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Full Name</label>
                  <input onChange={(e) => setName(e.target.value)} required value={name} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Email Address</label>
                  <input onChange={(e) => setEmail(e.target.value)} required value={email} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Phone No.</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} required value={phoneNumber} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Zip code</label>
                  <input onChange={(e) => setZipCode(e.target.value)} required value={zipCode} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Phone No.</label>
                  <input onChange={(e) => setPhoneNumber(e.target.value)} required value={phoneNumber} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Zip code</label>
                  <input onChange={(e) => setZipCode(e.target.value)} required value={zipCode} type={"number"} className={`${styles.input} !w-[95%]`} />
                </div>

              </div>
              <div className='w-full flex pb-3'>
                <div className='w-[50%]'>
                  <label className="block pb-2">Address 1</label>
                  <input onChange={(e) => setAddress1(e.target.value)} required value={address1} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>
                <div className='w-[50%]'>
                  <label className="block pb-2">Address 2</label>
                  <input onChange={(e) => setAddress2(e.target.value)} required value={address2} type={"text"} className={`${styles.input} !w-[95%]`} />
                </div>
              </div>
              <input className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`} type="submit" value="update" />
            </form>

          </div>
        </>

      }
    </div>
  )
}

export default ProfileContent
