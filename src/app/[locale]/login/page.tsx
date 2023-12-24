"use client";

import { ProtectedRoute } from "@/HOCS/ProtectedRoutes";
import { Typography } from "@/components";
import { useDictionaryStore } from "@/lib/zustand/dictionary";
import { useLoadingStore } from "@/lib/zustand/loading.store";
import { useUserStore } from "@/lib/zustand/user.store";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { Formik, FormikHelpers } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
	username: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
});

export default function LoginPage() {
	const dictionary = useDictionaryStore((state) => state.dictionary);
	const [visible, setVisible] = useState<boolean>(false);
	const { signIn, updateUser } = useUserStore((state) => state);
	const { setLoading } = useLoadingStore((state) => state);

	return (
		<ProtectedRoute isLoginRoute={true}>
			<Row
				justify={"center"}
				align={"middle"}
				style={{ minHeight: "100vh", background: "#FCFAFA" }}
				className="flex-col"
			>
				<Col className="mb-[40px] text-center mx-5">
					<Typography
						weight={700}
						className="text-grey-400 text-xl md:text-3xl"
						size={"custom"}
					>
						{dictionary["welcome-login-page"]}
					</Typography>
				</Col>
				<Formik
					initialValues={{ username: "", password: "", isRemember: false }}
					onSubmit={(
						values: { username: string; password: string; isRemember: boolean },
						{ setSubmitting }: FormikHelpers<any>
					) => {
						setLoading(true);

						setTimeout(async () => {
							// const accessToken = await generateAccessToken();

							const isLoginSuccessfully = await signIn(
								values.username,
								values.password,
								values.isRemember
							);

							setSubmitting(false);

							setLoading(false);
						}, 1000);
					}}
					validationSchema={LoginSchema}
				>
					{({ values, errors, handleChange, handleBlur, handleSubmit, touched }) => (
						<Col className="bg-white mx-auto p-[30px]">
							<Form
								className="login-form"
								initialValues={{
									remember: true,
								}}
								autoComplete="off"
								autoFocus
								style={{
									maxWidth: 600,
									minWidth: 400,
								}}
								onFinish={handleSubmit}
							>
								<Form.Item name="username ">
									<div>
										<Input
											autoComplete="on"
											name="username"
											prefix={
												<UserOutlined className="site-form-item-icon pe-2" />
											}
											placeholder="Username"
											value={values.username}
											onChange={handleChange}
											onBlur={handleBlur}
											className="py-2 text-grey-100"
										/>
										{errors.username && touched.username && (
											<div className=" my-3">{errors.username}</div>
										)}
									</div>
								</Form.Item>

								<Form.Item name="password">
									<div>
										<Input
											autoComplete="on"
											name="password"
											prefix={
												<LockOutlined className="site-form-item-icon pe-2" />
											}
											type={!visible ? "password" : "text"}
											placeholder="Password"
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											className="py-2 text-grey-500"
											suffix={
												!visible ? (
													<EyeTwoTone
														onClick={() => setVisible(!visible)}
													/>
												) : (
													<EyeInvisibleOutlined
														onClick={() => setVisible(!visible)}
													/>
												)
											}
										/>
										{errors.password && touched.password && (
											<div className=" my-3">{errors.password}</div>
										)}
									</div>
								</Form.Item>

								<Form.Item className="text-center">
									<Form.Item name="isRemember" valuePropName="checked" noStyle>
										<Checkbox
											checked={values.isRemember}
											onChange={handleChange}
										>
											{dictionary["remember-me"]}
										</Checkbox>
									</Form.Item>
								</Form.Item>

								<Form.Item className="text-center">
									<Button
										type="primary"
										htmlType="submit"
										className="me-2 w-full"
									>
										{dictionary.login}
									</Button>
								</Form.Item>
							</Form>
						</Col>
					)}
				</Formik>
				<Typography className="text-center mt-5">
					<Link prefetch href="/" className="">
						{dictionary["go-to-homepage"]}
					</Link>
				</Typography>
			</Row>
		</ProtectedRoute>
	);
}
