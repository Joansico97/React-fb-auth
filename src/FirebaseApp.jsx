import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';

export const FirebaseApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
