'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createPasswordSchema } from '@/lib/zod'
import { Eye, EyeOff, Loader2, Lock } from 'lucide-react'
import { useSignIn } from '@clerk/nextjs'

const CreatePasswordComponent = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()

  const form = useForm<z.infer<typeof createPasswordSchema>>({
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
      code: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof createPasswordSchema>) => {
    if (!isLoaded) {
      return
    }
    startTransition(async () => {
      try {
        const result = await signIn.attemptFirstFactor({
          strategy: 'reset_password_email_code',
          code: values.code,
          password: values.password,
        })

        if (result.status === 'complete') {
          setActive({ session: result.createdSessionId })
          toast.success('Password reset successfully!')
          router.push('/')
        } else {
          console.error(result)
          toast.error('Invalid code or password.')
        }
      } catch (err: any) {
        console.error('error', err.errors[0].longMessage)
        toast.error(err.errors[0].longMessage)
      }
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Code */}
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      placeholder="Verification Code"
                      className="ps-5 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary"
                      disabled={isPending}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                    <Input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="New Password"
                      name="password"
                      className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary"
                      disabled={isPending}
                    />
                    <Button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-muted-foreground hover:bg-transparent p-0 h-[unset]"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-700 dark:text-neutral-200" />
                    <Input
                      {...field}
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm New Password"
                      className="ps-13 pe-12 h-14 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-neutral-300 dark:border-slate-700 focus:border-primary dark:focus:border-primary"
                      disabled={isPending}
                    />
                    <Button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-muted-foreground hover:bg-transparent p-0 h-[unset]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full rounded-lg h-[52px] text-sm mt-2"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Resetting...
              </>
            ) : (
              'Reset Password'
            )}
          </Button>
        </form>
      </Form>

      <div className="mt-8 text-center text-sm">
        <p>
          Not now? Return{' '}
          <Link
            href="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  )
}

export default CreatePasswordComponent
