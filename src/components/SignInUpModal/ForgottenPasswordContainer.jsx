import ForgottenPasswordForm from '../Forms/ForgottenPassword';

export default function ForgottenPasswordContainer({
  isRememberingPassword,
  triggerLogin,
}) {
  return (
    <div
      className={
        'flex flex-col gap-8 w-1/2 transition-all duration-200 p-4 h-full ' +
        (isRememberingPassword ? '' : '-translate-x-full opacity-0')
      }
    >
      <ForgottenPasswordForm triggerLogin={triggerLogin} />
    </div>
  );
}
