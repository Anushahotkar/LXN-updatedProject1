

import React, { useState } from 'react';
import Logo from '../components/Logo';
import Card from '../components/Card';

const roles = [
  'Campaign Manager',
  'Candidate',
  'Data Analyst',
  'Field Organizer',
  'Communications Director',
];

const LoginPage = ({ setPage, setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        setLoading(false);
        return;
      }

      if (data.role !== selectedRole) {
        setError(`Role mismatch. Your registered role is "${data.role}".`);
        setLoading(false);
        return;
      }

      localStorage.setItem('token', data.token);
      setUserRole(data.role);
      setPage('dashboard');
    } catch (err) {
      setError('Server error. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 to-purple-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-md mx-auto">
        <Card className="p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
          <div className="flex justify-center mb-8">
            <Logo className="w-32 h-auto" />
          </div>

          {/* <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-6">
            Welcome Back
          </h2> */}

          {error && (
            <div
              role="alert"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 animate-fadeIn"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Select Your Role
              </label>
              <select
                id="role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold shadow-lg transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                loading
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95'
              }`}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Forgot password?{' '}
            <a
              href="#"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
              onClick={(e) => e.preventDefault()}
            >
              Reset it here
            </a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              onClick={() => setPage('landing')}
              className="text-indigo-600 hover:underline dark:text-indigo-400 font-medium"
            >
              Contact Sales
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
