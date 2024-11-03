import { useMutation } from '@tanstack/react-query';
import { singnup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfuly created! Please verify tha new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}