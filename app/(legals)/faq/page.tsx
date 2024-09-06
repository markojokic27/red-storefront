// External packages
import * as Accordion from '@radix-ui/react-accordion';

// Components
import { Icon } from '@/components/Icon';

export default function Page() {
  return (
    <div className="help-article">
      <h1>Frequently Asked Questions (FAQ)</h1>
      <p className="mb-16">
        Welcome to the Frequently Asked Questions (FAQ) page of Red Fashion
        Brand. We have compiled a list of common questions and provided detailed
        answers to help you navigate through your shopping experience. If you
        have a question that is not addressed here, please feel free to reach
        out to our customer support team for further assistance.
      </p>
      <Accordion.Root type="multiple">
        <Accordion.Item value="item1">
          <Accordion.Trigger className="trigger">
            <h3>1. How do I place an order?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>

          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              To place an order, simply browse our products and click on the
              item(s) you wish to purchase. Select the desired options (e.g.,
              size, color), add the item(s) to your cart, and proceed to the
              checkout page. Follow the prompts to enter your shipping and
              payment information, review your order, and confirm the purchase.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2">
          <Accordion.Trigger className="trigger">
            <h3>2. What payment methods do you accept?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              We accept various payment methods, including major credit cards
              (Visa, Mastercard, American Express), PayPal, and other secure
              online payment options. Select your preferred payment method at
              the checkout.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item3">
          <Accordion.Trigger className="trigger">
            <h3>3. What are your shipping options and timeframes?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>

          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              We offer different shipping methods, including standard and
              express delivery options. The estimated delivery timeframes may
              vary depending on your location and the selected shipping method.
              For detailed information, please visit our "Delivery and Returns"
              page.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item4">
          <Accordion.Trigger className="trigger">
            <h3>4. How can I track my order?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              Once your order is dispatched, you will receive a confirmation
              email with a tracking number. You can easily track the progress of
              your delivery by entering the provided tracking number on our
              website's "Track Order" page.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item5">
          <Accordion.Trigger className="trigger">
            <h3>5. What is your return policy?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              We want you to be completely satisfied with your purchase. If you
              need to return an item, please refer to our "Returns and Refunds"
              policy on our "Delivery and Returns" page for detailed
              instructions and eligibility criteria.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item6">
          <Accordion.Trigger className="trigger">
            <h3>6. Do you offer international shipping?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>

          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              Yes, we offer international shipping to select countries. During
              the checkout process, you can enter your shipping address to check
              if your country is eligible for delivery.
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item7" className="mb-26">
          <Accordion.Trigger className="trigger">
            <h3>7. How can I contact your customer support team?</h3>
            <Icon name="chevron" className="chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="accordion-content">
            <p className="mb-8">
              You can reach our friendly customer support team by [provide
              contact options, such as phone number, email address, or a contact
              form]. We are available [state working hours or response time] to
              assist you with any questions, concerns, or issues you may have.
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
