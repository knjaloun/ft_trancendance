import { LegalLayout, LegalSection, LegalText, LegalList } from "#legal/components/LegalLayout.tsx";
import { CONTACT_EMAIL, SERVICE_NAME, LAST_UPDATED } from "#legal/legalConfig.ts";

export function PrivacyPolicyPage() {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated={LAST_UPDATED}
            intro={
                <>
                    <strong>{SERVICE_NAME} is a student project</strong> built for the 42 curriculum. It is
                    not a commercial service, it processes no payments, and no real vehicle is ever
                    rented through it. This policy describes, honestly and in full, the personal data
                    the application stores and what happens to it.
                </>
            }
        >
            <LegalSection heading="1. Who is responsible for your data">
                <LegalText>
                    {SERVICE_NAME} is developed and operated by a team of students at 42 Luxembourg as
                    part of the ft_transcendence project. The team acts as the data controller for the
                    information described below. You can reach us at {CONTACT_EMAIL}.
                </LegalText>
                <LegalText>
                    The application runs on infrastructure controlled by the team for the duration of the
                    project. It is not intended for production use and should not be used to store
                    information you would not want a small student team to be able to read.
                </LegalText>
            </LegalSection>

            <LegalSection heading="2. What we collect, and why">
                <LegalText>
                    We only store what the application actually needs in order to work. Nothing is
                    collected for advertising, profiling, or resale.
                </LegalText>

                <LegalText>
                    <strong>Account data</strong>, collected when you register:
                </LegalText>
                <LegalList
                    items={[
                        "First name and last name — displayed to the people you rent from or rent to.",
                        "Email address — used to sign you in, to send the account activation link, and to contact you about a booking.",
                        "Phone number — so an owner and a renter can reach each other about a confirmed booking.",
                        "Password — never stored as you typed it. We store only a bcrypt hash with a per-password salt, from which the original cannot be recovered.",
                        "Account creation date, verification status, role, and account status — needed to operate the service and to enforce these rules.",
                    ]}
                />

                <LegalText>
                    <strong>Profile data</strong>, which you choose to provide:
                </LegalText>
                <LegalList
                    items={[
                        "An avatar image. A default placeholder is used if you upload nothing.",
                        "A free-text description that other users can read.",
                    ]}
                />

                <LegalText>
                    <strong>Vehicle listings</strong>, if you offer a vehicle for rent:
                </LegalText>
                <LegalList
                    items={[
                        "Brand, type, model, engine power, mileage, and the country where the vehicle is located.",
                        "The daily rate you set and whether the vehicle is currently available.",
                        "Photographs you upload of the vehicle.",
                    ]}
                />

                <LegalText>
                    <strong>Booking data</strong>, when you request or receive a booking:
                </LegalText>
                <LegalList
                    items={[
                        "The vehicle concerned, the start and end dates, and the current status of the request.",
                        "The identities of the two users involved, so each side can see who they are dealing with.",
                    ]}
                />

                <LegalText>
                    <strong>Technical data</strong>: a single-use email activation token linked to your
                    account, and ordinary server logs produced by the web server and the application
                    while handling requests.
                </LegalText>
            </LegalSection>

            <LegalSection heading="3. Cookies and tracking">
                <LegalText>
                    We use no analytics, no advertising network, and no third-party tracker. The
                    application stores only what is strictly necessary to keep you signed in during a
                    session. Nothing about your browsing is shared with anyone.
                </LegalText>
            </LegalSection>

            <LegalSection heading="4. Who your data is shared with">
                <LegalText>
                    Your data is not sold, rented, or traded. It is shared only in the two situations
                    below:
                </LegalText>
                <LegalList
                    items={[
                        "With other users, and only what is necessary: a vehicle owner sees the name and contact details of a person requesting their vehicle, and a renter sees the same about the owner. Your password hash is never exposed to anyone.",
                        "With a third-party SMTP email provider, which delivers the account activation message. That provider receives your email address and the contents of the message we send you.",
                    ]}
                />
                <LegalText>
                    We would also disclose data if we were legally required to do so, though for a
                    student project this is a theoretical case.
                </LegalText>
            </LegalSection>

            <LegalSection heading="5. How long we keep it">
                <LegalText>
                    Account, profile, listing, and booking data are kept for as long as your account
                    exists. Email activation tokens are deleted as soon as they have been used, or once
                    they expire after 24 hours.
                </LegalText>
                <LegalText>
                    Because {SERVICE_NAME} is an academic project, the entire database is deleted once
                    the project has been evaluated and the team stops maintaining it.
                </LegalText>
            </LegalSection>

            <LegalSection heading="6. How we protect it">
                <LegalList
                    items={[
                        "Passwords are hashed with bcrypt and a unique salt, so a copy of the database does not reveal them.",
                        "All traffic between your browser and the application is encrypted with HTTPS.",
                        "The database and the internal services are not reachable from the public internet.",
                        "Email activation links are single-use, expire after 24 hours, and are invalidated once consumed.",
                    ]}
                />
                <LegalText>
                    No system is perfectly secure, and this one is built by students who are still
                    learning. Please do not reuse a password here that you use anywhere else.
                </LegalText>
            </LegalSection>

            <LegalSection heading="7. Your rights">
                <LegalText>
                    Under the GDPR you may ask us to do any of the following, free of charge:
                </LegalText>
                <LegalList
                    items={[
                        "Access — obtain a copy of the personal data we hold about you.",
                        "Rectification — correct anything that is inaccurate or incomplete.",
                        "Erasure — delete your account and the data attached to it.",
                        "Portability — receive your data in a machine-readable format.",
                        "Restriction and objection — ask us to stop processing your data in a given way.",
                        "Withdraw consent — for anything you agreed to optionally, at any time.",
                    ]}
                />
                <LegalText>
                    Write to {CONTACT_EMAIL} and we will act on your request. You also have the right to
                    lodge a complaint with the Luxembourg data protection authority, the Commission
                    nationale pour la protection des données.
                </LegalText>
            </LegalSection>

            <LegalSection heading="8. Children">
                <LegalText>
                    {SERVICE_NAME} is not intended for anyone under 18, since renting a vehicle requires a
                    driving licence. We do not knowingly collect data from minors. If you believe a minor
                    has created an account, contact us and we will remove it.
                </LegalText>
            </LegalSection>

            <LegalSection heading="9. Changes to this policy">
                <LegalText>
                    If this policy changes, the revision date at the top of the page is updated. Where a
                    change materially affects how your data is handled, we will also notify you by email.
                </LegalText>
            </LegalSection>

            <LegalSection heading="10. Contact">
                <LegalText>
                    Any question about this policy or about your data: {CONTACT_EMAIL}.
                </LegalText>
            </LegalSection>
        </LegalLayout>
    );
}
