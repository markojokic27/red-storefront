// External packages
import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

// Components
import { Icon } from '@/components/Icon';
import { LegalsLayout } from '@/components/LagalsLayout';

export default function Page() {
  return (
    <LegalsLayout>
      <div className="help-article">
        <h1>Help</h1>
        <p className="mb-16">
          Welcome to the Help page of Red Fashion Brand. We are here to assist
          you with any inquiries or issues you may encounter while using our
          webshop. Below are some common topics to help you find the information
          you need:
        </p>
        <Accordion.Root type="multiple">
          <Accordion.Item value="item1">
            <Accordion.Trigger className="trigger">
              <h3>1. Placing an Order</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>

            <Accordion.Content className="accordion-content">
              <p>To place an order, follow these simple steps:</p>
              <ul>
                <li>
                  <b>Browsing Products:</b> Navigate through our webshop by
                  using the menu categories or search bar to find the products
                  you're interested in.
                </li>
                <li>
                  <b>Product Details:</b> Click on a product to view its
                  detailed information, including descriptions, specifications,
                  available sizes, colors, and images.
                </li>
                <li>
                  <b>Adding to Cart:</b> Select the desired options (e.g., size,
                  color) and click the "Add to Cart" button to add the item to
                  your shopping cart.
                </li>
                <li>
                  <b>Checkout Process:</b> Once you have finished shopping,
                  proceed to the checkout page. Enter your shipping information,
                  select a shipping method, and choose your preferred payment
                  option.
                </li>
                <li>
                  <b>Review and Confirm:</b> Review your order summary,
                  including the items, quantities, and total cost. Make any
                  necessary changes and ensure that all the information is
                  accurate before proceeding with the purchase.
                </li>
                <li>
                  <b>Order Confirmation:</b> After completing the checkout
                  process, you will receive an order confirmation email with
                  details of your purchase.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item2">
            <Accordion.Trigger className="trigger">
              <h3>2. Payments and Billing</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <p>
                We offer various secure payment options to make your shopping
                experience convenient:
              </p>
              <ul>
                <li>
                  <b>Accepted Payment Methods:</b> We accept major credit cards
                  (Visa, Mastercard, American Express), PayPal, and other secure
                  online payment options. Select your preferred payment method
                  during the checkout process.
                </li>
                <li>
                  <b>Transaction Security:</b> We prioritize the security of
                  your personal and financial information. Our website utilizes
                  industry-standard encryption and security measures to protect
                  your data.
                </li>
                <li>
                  <b>Billing Inquiries:</b> If you have any questions or
                  concerns regarding billing, charges, or payment-related
                  issues, please reach out to our customer support team. Provide
                  relevant details, such as your order number or transaction
                  information, to help us assist you promptly.
                </li>
                <li>
                  <b>Refunds:</b> In case of eligible returns, we initiate the
                  refund process. The refund will be issued to the original
                  payment method used during the purchase. The time it takes for
                  the refund to reflect in your account may vary depending on
                  your payment provider.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item3">
            <Accordion.Trigger className="trigger">
              <h3>3. Shipping and Delivery</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>

            <Accordion.Content className="accordion-content">
              <p>To place an order, follow these simple steps:</p>
              <ul>
                <li>
                  <b>Browsing Products:</b> Navigate through our webshop by
                  using the menu categories or search bar to find the products
                  you're interested in.
                </li>
                <li>
                  <b>Product Details:</b> Click on a product to view its
                  detailed information, including descriptions, specifications,
                  available sizes, colors, and images.
                </li>
                <li>
                  <b>Adding to Cart:</b> Select the desired options (e.g., size,
                  color) and click the "Add to Cart" button to add the item to
                  your shopping cart.
                </li>
                <li>
                  <b>Checkout Process:</b> Once you have finished shopping,
                  proceed to the checkout page. Enter your shipping information,
                  select a shipping method, and choose your preferred payment
                  option.
                </li>
                <li>
                  <b>Review and Confirm:</b> Review your order summary,
                  including the items, quantities, and total cost. Make any
                  necessary changes and ensure that all the information is
                  accurate before proceeding with the purchase.
                </li>
                <li>
                  <b>Order Confirmation:</b> After completing the checkout
                  process, you will receive an order confirmation email with
                  details of your purchase.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item4">
            <Accordion.Trigger className="trigger">
              <h3>4. Returns and Refunds</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <p>
                We offer various secure payment options to make your shopping
                experience convenient:
              </p>
              <ul>
                <li>
                  <b>Accepted Payment Methods:</b> We accept major credit cards
                  (Visa, Mastercard, American Express), PayPal, and other secure
                  online payment options. Select your preferred payment method
                  during the checkout process.
                </li>
                <li>
                  <b>Transaction Security:</b> We prioritize the security of
                  your personal and financial information. Our website utilizes
                  industry-standard encryption and security measures to protect
                  your data.
                </li>
                <li>
                  <b>Billing Inquiries:</b> If you have any questions or
                  concerns regarding billing, charges, or payment-related
                  issues, please reach out to our customer support team. Provide
                  relevant details, such as your order number or transaction
                  information, to help us assist you promptly.
                </li>
                <li>
                  <b>Refunds:</b> In case of eligible returns, we initiate the
                  refund process. The refund will be issued to the original
                  payment method used during the purchase. The time it takes for
                  the refund to reflect in your account may vary depending on
                  your payment provider.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item5">
            <Accordion.Trigger className="trigger">
              <h3>5. Product Information</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <p>
                We offer various secure payment options to make your shopping
                experience convenient:
              </p>
              <ul>
                <li>
                  <b>Accepted Payment Methods:</b> We accept major credit cards
                  (Visa, Mastercard, American Express), PayPal, and other secure
                  online payment options. Select your preferred payment method
                  during the checkout process.
                </li>
                <li>
                  <b>Transaction Security:</b> We prioritize the security of
                  your personal and financial information. Our website utilizes
                  industry-standard encryption and security measures to protect
                  your data.
                </li>
                <li>
                  <b>Billing Inquiries:</b> If you have any questions or
                  concerns regarding billing, charges, or payment-related
                  issues, please reach out to our customer support team. Provide
                  relevant details, such as your order number or transaction
                  information, to help us assist you promptly.
                </li>
                <li>
                  <b>Refunds:</b> In case of eligible returns, we initiate the
                  refund process. The refund will be issued to the original
                  payment method used during the purchase. The time it takes for
                  the refund to reflect in your account may vary depending on
                  your payment provider.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item6">
            <Accordion.Trigger className="trigger">
              <h3>6. Account and Profile</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>

            <Accordion.Content className="accordion-content">
              <p>To place an order, follow these simple steps:</p>
              <ul>
                <li>
                  <b>Browsing Products:</b> Navigate through our webshop by
                  using the menu categories or search bar to find the products
                  you're interested in.
                </li>
                <li>
                  <b>Product Details:</b> Click on a product to view its
                  detailed information, including descriptions, specifications,
                  available sizes, colors, and images.
                </li>
                <li>
                  <b>Adding to Cart:</b> Select the desired options (e.g., size,
                  color) and click the "Add to Cart" button to add the item to
                  your shopping cart.
                </li>
                <li>
                  <b>Checkout Process:</b> Once you have finished shopping,
                  proceed to the checkout page. Enter your shipping information,
                  select a shipping method, and choose your preferred payment
                  option.
                </li>
                <li>
                  <b>Review and Confirm:</b> Review your order summary,
                  including the items, quantities, and total cost. Make any
                  necessary changes and ensure that all the information is
                  accurate before proceeding with the purchase.
                </li>
                <li>
                  <b>Order Confirmation:</b> After completing the checkout
                  process, you will receive an order confirmation email with
                  details of your purchase.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item7">
            <Accordion.Trigger className="trigger">
              <h3>7. Privacy and Security</h3>
              <Icon name="chevron" className="chevron" />
            </Accordion.Trigger>
            <Accordion.Content className="accordion-content">
              <p>
                We offer various secure payment options to make your shopping
                experience convenient:
              </p>
              <ul>
                <li>
                  <b>Accepted Payment Methods:</b> We accept major credit cards
                  (Visa, Mastercard, American Express), PayPal, and other secure
                  online payment options. Select your preferred payment method
                  during the checkout process.
                </li>
                <li>
                  <b>Transaction Security:</b> We prioritize the security of
                  your personal and financial information. Our website utilizes
                  industry-standard encryption and security measures to protect
                  your data.
                </li>
                <li>
                  <b>Billing Inquiries:</b> If you have any questions or
                  concerns regarding billing, charges, or payment-related
                  issues, please reach out to our customer support team. Provide
                  relevant details, such as your order number or transaction
                  information, to help us assist you promptly.
                </li>
                <li>
                  <b>Refunds:</b> In case of eligible returns, we initiate the
                  refund process. The refund will be issued to the original
                  payment method used during the purchase. The time it takes for
                  the refund to reflect in your account may vary depending on
                  your payment provider.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>

        <p className="mb-26 mt-24">
          If you cannot find the information you need or require further
          assistance, please don't hesitate to contact our customer support
          team. We are dedicated to providing excellent customer service and
          will be glad to assist you.
        </p>
      </div>
    </LegalsLayout>
  );
}
