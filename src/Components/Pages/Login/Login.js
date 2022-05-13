import React from 'react';
import { useSignInWithGoogle } from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
      const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();
      const onSubmit = data => {
            console.log(data)
      };

      if (user) {
            console.log(user);
      }

      if (loading) {
            console.log("Loading...")
      }

      if (error) {
            console.log(error)
      }

      return (
            <div className='flex justify-center items-center h-screen'>
                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                              <h2 className="text-center text-xl">Login</h2>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text">Email</span>
                                          </label>
                                          <input
                                                type="email"
                                                placeholder="Your Email"
                                                class="input input-bordered w-full max-w-xs"
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
                                          <label class="label">
                                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                                          </label>
                                    </div>
                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text">Password</span>
                                          </label>
                                          <input
                                                type="password"
                                                placeholder="Your Password"
                                                class="input input-bordered w-full max-w-xs"
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
                                          <label class="label">
                                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                                          </label>
                                    </div>

                                    <input className='btn w-full max-w-xs' type="submit" value="Login" />
                              </form>
                              <div className="divider">OR</div>
                              <button
                                    onClick={() => signInWithGoogle()}
                                    className='btn btn-outline'
                              >Continue with google</button>
                        </div>
                  </div>
            </div>
      );
};

export default Login;