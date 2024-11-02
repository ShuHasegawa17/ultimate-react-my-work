import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('user account successfully edited', {
        style: { backgroundColor: 'white' },
      });
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (err) =>
      toast.error(err.message, { style: { backgroundColor: 'white' } }),
  });
  return { updateUser, isUpdating };
}
