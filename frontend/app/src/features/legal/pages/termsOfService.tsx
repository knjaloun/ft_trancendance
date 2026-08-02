import { LegalLayout, LegalSection, LegalText, LegalList } from "#legal/components/LegalLayout.tsx";
import { CONTACT_EMAIL, SERVICE_NAME, JURISDICTION, LAST_UPDATED } from "#legal/legalConfig.ts";

export function TermsOfServicePage() {
    return (
        <LegalLayout
            title="Terms of Service"
            lastUpdated={LAST_UPDATED}
            intro={
                <>
                    <strong>{SERVICE_NAME} is a student project</strong> built for the 42 curriculum. It is
                    a demonstration of a peer-to-peer vehicle rental platform. No money changes hands, no
                    binding rental contract is formed, and no real vehicle is handed over through this
                    site. These terms describe how the application may be used.
                </>
            }
        >
            <LegalSection heading="1. Acceptance of these terms">
                <LegalText>
                    By creating an account you confirm that you have read and accepted these terms and
                    the Privacy Policy. If you do not accept them, do not create an account and do not
                    use the service.
                </LegalText>
            </LegalSection>

            <LegalSection heading="2. What the service is, and is not">
                <LegalText>
                    {SERVICE_NAME} lets one user list a vehicle and another user request it for a range of
                    dates. The platform only puts the two sides in contact and records the state of the
                    request.
                </LegalText>
                <LegalText>
                    <strong>We are not a party to any rental agreement.</strong> We are not a rental
                    company, an insurer, a broker, or a payment provider. We do not verify vehicles, we
                    do not verify driving licences, and we do not guarantee that any listing is genuine.
                    Because this is an academic project, you should treat every listing as fictional.
                </LegalText>
            </LegalSection>

            <LegalSection heading="3. Eligibility">
                <LegalList
                    items={[
                        "You must be at least 18 years old.",
                        "To request a vehicle you must hold a valid driving licence for that category of vehicle.",
                        "You must provide accurate information and keep it up to date.",
                        "One person may hold one account. Accounts may not be shared, sold, or transferred.",
                    ]}
                />
            </LegalSection>

            <LegalSection heading="4. Your account">
                <LegalText>
                    You must verify your email address before you can sign in. You are responsible for
                    keeping your password confidential and for everything done through your account.
                    Tell us immediately at {CONTACT_EMAIL} if you believe someone else has access to it.
                </LegalText>
                <LegalText>
                    Choose a password of at least eight characters, and do not reuse a password from
                    another service.
                </LegalText>
            </LegalSection>

            <LegalSection heading="5. If you list a vehicle">
                <LegalText>By publishing a listing you confirm that:</LegalText>
                <LegalList
                    items={[
                        "You have the right to offer the vehicle for rent.",
                        "The description, the photographs, the mileage, the engine power, and the location are accurate.",
                        "The vehicle is roadworthy, legally registered, and insured for the use you are offering.",
                        "The daily rate you display is the rate you intend to honour.",
                        "You will keep the availability of the listing up to date.",
                    ]}
                />
            </LegalSection>

            <LegalSection heading="6. If you request a vehicle">
                <LegalList
                    items={[
                        "You will hold a valid driving licence for the entire rental period.",
                        "You will use the vehicle lawfully, and only as agreed with the owner.",
                        "You will not let anyone else drive it without the owner's agreement.",
                        "You will return it on the agreed date, in the condition in which you received it.",
                        "You are responsible for any fine, toll, or penalty incurred during the period.",
                    ]}
                />
            </LegalSection>

            <LegalSection heading="7. How a booking works">
                <LegalText>
                    A booking request starts as <strong>pending</strong>. The owner may accept it, which
                    makes it <strong>confirmed</strong>, or either side may make it{" "}
                    <strong>canceled</strong>. A pending request reserves nothing and creates no
                    obligation for either party.
                </LegalText>
                <LegalText>
                    Cancellation terms, deposits, fuel policy, mileage limits, and insurance are matters
                    between the owner and the renter. The platform records none of them and enforces
                    none of them.
                </LegalText>
            </LegalSection>

            <LegalSection heading="8. Payments">
                <LegalText>
                    The platform processes no payments. Daily rates shown on listings are indicative
                    only. Never send money through this application, and never treat a booking recorded
                    here as proof of payment.
                </LegalText>
            </LegalSection>

            <LegalSection heading="9. Acceptable use">
                <LegalText>You agree not to:</LegalText>
                <LegalList
                    items={[
                        "Publish false, misleading, or fraudulent listings.",
                        "Impersonate another person or create an account on someone else's behalf.",
                        "Upload content that is illegal, hateful, harassing, or infringes someone else's rights.",
                        "Attempt to gain unauthorised access to the service, other accounts, or the underlying infrastructure.",
                        "Scrape, overload, or otherwise disrupt the service.",
                        "Use the service for any purpose other than the demonstration it is meant to be.",
                    ]}
                />
                <LegalText>
                    If you find a security flaw, we would genuinely like to hear about it. Report it to{" "}
                    {CONTACT_EMAIL} rather than exploiting it.
                </LegalText>
            </LegalSection>

            <LegalSection heading="10. Content you upload">
                <LegalText>
                    You keep ownership of the photographs and descriptions you upload. You grant us a
                    non-exclusive, royalty-free licence to store and display that content within the
                    application, for as long as your account exists and solely for the purpose of
                    running the service. You confirm you have the right to upload it.
                </LegalText>
                <LegalText>
                    We may remove content that breaches these terms or the rights of a third party.
                </LegalText>
            </LegalSection>

            <LegalSection heading="11. Availability and liability">
                <LegalText>
                    The service is provided as is, with no warranty of any kind. Being a student project,
                    it may be unavailable, reset, or permanently shut down at any time and without
                    notice, and data may be lost.
                </LegalText>
                <LegalText>
                    To the fullest extent permitted by law, the team is not liable for any loss or damage
                    arising from the use of the service, from dealings between users, or from the
                    condition or use of any vehicle. Nothing here excludes liability that cannot be
                    excluded by law.
                </LegalText>
            </LegalSection>

            <LegalSection heading="12. Suspension and termination">
                <LegalText>
                    We may restrict or ban an account that breaches these terms, that harms other users,
                    or that puts the service at risk. Where circumstances allow, we will say why.
                </LegalText>
                <LegalText>
                    You may close your account at any time by writing to {CONTACT_EMAIL}. The Privacy
                    Policy explains what happens to your data afterwards.
                </LegalText>
            </LegalSection>

            <LegalSection heading="13. Changes to these terms">
                <LegalText>
                    We may update these terms. The revision date at the top of the page always reflects
                    the current version, and material changes are announced by email. Continuing to use
                    the service after a change means you accept the new version.
                </LegalText>
            </LegalSection>

            <LegalSection heading="14. Governing law">
                <LegalText>
                    These terms are governed by the laws of {JURISDICTION}. Any dispute falls under the
                    jurisdiction of the competent Luxembourg courts, without prejudice to any mandatory
                    consumer protection rules that apply where you live.
                </LegalText>
            </LegalSection>

            <LegalSection heading="15. Contact">
                <LegalText>Any question about these terms: {CONTACT_EMAIL}.</LegalText>
            </LegalSection>
        </LegalLayout>
    );
}
