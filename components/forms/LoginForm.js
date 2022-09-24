import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Formik, Form, Field } from 'formik';
import { setItem } from 'next-basics';
import { useRouter } from 'next/router';
import Button from 'components/common/Button';
import FormLayout, {
  FormButtons,
  FormError,
  FormMessage,
  FormRow,
} from 'components/layout/FormLayout';
import Icon from 'components/common/Icon';
import useApi from 'hooks/useApi';
import { AUTH_TOKEN } from 'lib/constants';
import { setUser } from 'store/app';
import Logo from 'assets/logo.svg';
import styles from './LoginForm.module.css';

const validate = ({ username, password }) => {
  const errors = {};

  if (!username) {
    errors.username = <FormattedMessage id="label.required" defaultMessage="Required" />;
  }
  if (!password) {
    errors.password = <FormattedMessage id="label.required" defaultMessage="Required" />;
  }

  return errors;
};

export default function LoginForm() {
  const { post } = useApi();
  const router = useRouter();
  const [message, setMessage] = useState();

  const handleSubmit = async ({ username, password }) => {
    const { ok, status, data } = await post('/auth/login', {
      username,
      password,
    });

    if (ok) {
      setItem(AUTH_TOKEN, data.token);

      setUser(data.user);

      await router.push('/');

      return null;
    } else {
      setMessage(
        status === 401 ? (
          <FormattedMessage
            id="message.incorrect-username-password"
            defaultMessage="Incorrect username/password."
          />
        ) : (
          data
        ),
      );
    }
  };

  return (
    <FormLayout className={styles.login}>
      
    </FormLayout>
  );
}
