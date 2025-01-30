'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const LoginPage = () => {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  return (
    <div>
      <h1>Login</h1>
      {providers &&
        Object.values(providers).map((provider: any) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export default LoginPage;
