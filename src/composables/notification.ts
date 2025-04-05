import Swal from 'sweetalert2';
import type NotificationOptions from '@/types/Notification.ts'


export default function useNotification() {

  const toast = (options: NotificationOptions) => {
    return Swal.fire({
      position: options.position || 'top-end',
      icon: options.icon || 'info',
      title: options.title,
      text: options.text,
      showConfirmButton: options.showConfirmButton || false,
      showCancelButton: options.showCancelButton || false,
      timer: options.timer || 1500
    });
  };

  const success = (title: string, text?: string, timer? :number) => {
    return toast({
      icon: 'success',
      title,
      text,
      timer,
      position: 'center'
    });
  };

  const error = (title: string, text?: string, timer = 1500) => {
    return toast({
      icon: 'error',
      title,
      text,
      timer
    });
  };

  const confirm = (options: NotificationOptions) => {
    return Swal.fire({
      title: options.title,
      text: options.text || '',
      icon: options.icon || 'question',
      showCancelButton: true,
      timer: options.timer || 20000,
      confirmButtonText: options.confirmButtonText || 'Yes',
      cancelButtonText: options.cancelButtonText || 'No',
      confirmButtonColor: options.confirmButtonColor || '#ef4444',
      timerProgressBar: options.timerProgressBar || true,
      reverseButtons: options.reverseButtons || true
    });
  };
  return {
    toast,
    confirm,
    success,
    error
  }

}
