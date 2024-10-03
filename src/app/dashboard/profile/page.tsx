import UpdateEmailForm from "@/app/components/profile/update-email-form";
import UpdatePasswordForm from "@/app/components/profile/update-password-form";
import UpdateProfileForm from "@/app/components/profile/update-profile-form";


export default function Profile() {
  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className={` text-2xl`}>Profile Settings</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <UpdateProfileForm />
        <UpdatePasswordForm />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        <UpdateEmailForm />
      </div>
    </main>
  );
}