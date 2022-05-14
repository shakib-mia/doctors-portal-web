import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
      const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
      const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate()

      let signInErrorMessage;

      const { register, formState: { errors }, handleSubmit } = useForm();
      const onSubmit = data => {
            console.log(data);
            localStorage.setItem("userName", data.name)
            createUserWithEmailAndPassword(data.email, data.password)
      };

      if (loading || googleLoading) {
            return <Loading />
      }

      if (googleUser || user) {
            console.log(googleUser || user);
            localStorage.setItem("name", user?.user.email)
            localStorage.setItem("googleUser", googleUser?.user.displayName);
            navigate(localStorage.getItem("path") ? localStorage.getItem("path") : "/")
      }

      if (error || googleError) {
            signInErrorMessage = <p className='text-red-600'>{error.message}</p>
      }

      return (
            <div className='flex justify-center items-center h-screen'>
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                              <h2 className="text-center text-xl">Registration</h2>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text">Name</span>
                                          </label>
                                          <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("name", {
                                                      required: {
                                                            value: true,
                                                            message: "name is Required"
                                                      }
                                                })}
                                          />
                                          <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                          </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text">Email</span>
                                          </label>
                                          <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("email", {
                                                      required: {
                                                            value: true,
                                                            message: "Email is Required"
                                                      },
                                                      pattern: {
                                                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                                            message: 'Provide a Valid Email'
                                                      }
                                                })}
                                          />
                                          <label className="label">
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                          </label>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                          <label className="label">
                                                <span className="label-text">Password</span>
                                          </label>
                                          <input
                                                type="password"
                                                placeholder="Your Password"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("password", {
                                                      required: {
                                                            value: true,
                                                            message: "Password is Required"
                                                      },
                                                      minLength: {
                                                            value: 1,
                                                            message: 'Must be Six Characters or Longer' // JS only: <p>error message</p> TS only support string
                                                      }
                                                })}
                                          />
                                          <label className="label">
                                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                          </label>
                                    </div>
                                    {signInErrorMessage}
                                    <input className='btn w-full max-w-xs' type="submit" value="Register" />
                              </form>

                              <p className='text-center'>Already A Member? <Link className='text-green-500 underline hover:no-underline' to="/register">Log in</Link></p>

                              <div className="divider">OR</div>
                              <button
                                    onClick={() => {
                                          signInWithGoogle();
                                    }}
                                    className='btn btn-outline'
                              >Continue with google</button>
                        </div>
                  </div>
            </div>
      );
};

export default Registration;