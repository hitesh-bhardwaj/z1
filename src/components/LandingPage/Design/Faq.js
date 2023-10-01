import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";

export default function Faq() {

    return(
        <>
            <div className={styles.faq}>
                <div className={styles.faqTopBox}>
                    <h2 className={styles.heading1}>
                        FA<span className={styles.reinventTextGradient}>Qs
                        </span> 
                    </h2>
                    <p className={styles.para1}>
                        Got questions? We got answers
                    </p>
                </div>
                <div className={styles.faqBottomBox}>
                    <div className="grid divide-y divide-neutral-200 mx-auto mt-8">
                        <div className="py-8">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <h4> What is a SAAS platform?</h4>
                                    <img src="/assets/landing-page/design/arrow-faq.svg" />
                                </summary>
                                <p className="text-neutral-400 mt-5 group-open:animate-fadeIn">
                                    SAAS platform is a cloud-based software service that allows users to access
                                    and use a variety of tools and functionality.
                                </p>
                            </details>
                        </div>
                        <div className="py-8">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <h4> How does  billing work?</h4>
                                    <img src="/assets/landing-page/design/arrow-faq.svg" />
                                </summary>
                                <p className="text-neutral-400 mt-5 group-open:animate-fadeIn">
                                    We offers a variety of billing options, including monthly and annual subscription plans,
                                    as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
                                    card or other secure online payment method.
                                </p>
                            </details>
                        </div>
                        <div className="py-8">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <h4> Can I get a refund for my subscription?</h4>
                                    <img src="/assets/landing-page/design/arrow-faq.svg" />
                                </summary>
                                <p className="text-neutral-400 mt-5 group-open:animate-fadeIn">
                                    We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
                                    satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
                                    for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
                                    basis.
                                </p>
                            </details>
                        </div>
                        <div className="py-8">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <h4> How do I cancel my subscription?</h4>
                                    <img src="/assets/landing-page/design/arrow-faq.svg" />
                                </summary>
                                <p className="text-neutral-400 mt-5 group-open:animate-fadeIn">
                                    To cancel your We subscription, you can log in to your account and navigate to the
                                    subscription management page. From there, you should be able to cancel your subscription and stop
                                    future billing.
                                </p>
                            </details>
                        </div>
                        <div className="py-8">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <h4> Can I try this platform for free?</h4>
                                    <img src="/assets/landing-page/design/arrow-faq.svg" />
                                </summary>
                                <p className="text-neutral-400 mt-5 group-open:animate-fadeIn">
                                    We offers a free trial of its  platform for a limited time. During the trial period,
                                    you will have access to a limited set of features and functionality, but you will not be charged.
                                </p>
                            </details>
                        </div>
                        <div className="py-8">
                            <details className="group">
                                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                    <h4> How do I access   documentation?</h4>
                                    <img src="/assets/landing-page/design/arrow-faq.svg" />
                                </summary>
                                <p className="text-neutral-400 mt-5 group-open:animate-fadeIn">
                                    Documentation is available on the company's website and can be accessed by
                                    logging in to your account. The documentation provides detailed information on how to use the ,
                                    as well as code examples and other resources.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>              
            </div>
        </>
    );
};