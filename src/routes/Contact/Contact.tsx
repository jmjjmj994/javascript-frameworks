import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './contact.module.css';
import { useEffect, useState } from 'react';
import { RiH1 } from 'react-icons/ri';

type FormInputs = {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [valid, setValid] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FormInputs> = () => {
    const validated = Object.values(errors).every((error) => !error);
    if (validated) {
      setValid(true);
    }
  };
  useEffect(() => {
    function refreshUI() {
      setValid(false);
    }
    const timeout = setTimeout(refreshUI, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [valid]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {valid ? (
        <h1>Your message has been sent</h1>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[30px] max-w-[40rem] w-full  py-[50px] px-2"
        >
          <div className="flex flex-wrap gap-[10px] w-full">
            <div className="flex flex-col grow">
              <label htmlFor="first_name">First name</label>
              <input
                id="first_name"
                type="text"
                className="rounded-md border py-1 pl-1"
                placeholder="First name"
                {...register('first_name', {
                  required: 'Minimum number of characters is 3',
                  minLength: {
                    value: 3,
                    message: 'Minimum number of characters is 3',
                  },
                })}
              />
              <label className={styles.error} htmlFor="error">
                {errors?.first_name && errors.first_name.message}
              </label>
            </div>
            <div className="flex flex-col grow">
              <label htmlFor="last_name">Last name</label>
              <input
                id="last_name"
                type="text"
                className="rounded-md border py-1 pl-1"
                placeholder="Last name"
                {...register('last_name', {
                  required: 'Minimum number of characters is 3',
                  minLength: {
                    value: 3,
                    message: 'Minimum number of characters is 3',
                  },
                })}
              />
              <label className={styles.error} htmlFor="error">
                {errors?.last_name && errors.last_name.message}
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="rounded-md border py-1 pl-1"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <label className={styles.error} htmlFor="error">
              {errors?.email && errors.email.message}
            </label>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="rounded-md border py-1 pl-1"
              placeholder="Subject"
              {...register('subject', {
                required: 'Minimum number of characters is 3',
                minLength: {
                  value: 3,
                  message: 'Minimum number of characters is 3',
                },
              })}
            />
            <label className={styles.error} htmlFor="error">
              {errors?.subject && errors.subject.message}
            </label>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="Message">Message</label>
            <textarea
              id="message"
              className="rounded-md border py-1 pl-1 min-h-[30vh]"
              placeholder="Message"
              {...register('message', {
                required: 'Minimum number of characters is 3',
                minLength: {
                  value: 3,
                  message: 'Minimum number of characters is 3',
                },
              })}
            ></textarea>
            <label className={styles.error} htmlFor="error">
              {errors?.message && errors.message.message}
            </label>
          </div>

          <button className='bg-blue-400 text-white font-button py-2 rounded-md' type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
export default Contact;
