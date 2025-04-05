import type { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2'

export default interface NotificationOptions {
  position?: SweetAlertPosition
  icon?: SweetAlertIcon
  title: string
  text?: string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  timer?: number
  confirmButtonText?: string
  cancelButtonText?: string
  confirmButtonColor?: string
  timerProgressBar?: true
  reverseButtons?: true
}
