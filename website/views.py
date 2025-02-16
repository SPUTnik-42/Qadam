from django.shortcuts import render
from .razorpay_integration import *
# Create your views here.

def HomeView(request):
    return render(request,'HomePage.html')

def AboutView(request):
    return render(request,'AboutUs.html')

def WorkView(request):
    return render(request,'OurWork.html')


def payment_view(request):
   amount = 100  # Set the amount dynamically or based on your requirements
   order_id = initiate_payment(amount)
   context = {
       'order_id': order_id,
       'amount': amount
   }
   return render(request, 'donate.html', context)

def payment_success_view(request):
   order_id = request.POST.get('order_id')
   payment_id = request.POST.get('razorpay_payment_id')
   signature = request.POST.get('razorpay_signature')
   params_dict = {
       'razorpay_order_id': order_id,
       'razorpay_payment_id': payment_id,
       'razorpay_signature': signature
   }
   try:
       client.utility.verify_payment_signature(params_dict)
       # Payment signature verification successful
       # Perform any required actions (e.g., update the order status)
       return render(request, 'donate_success.html')
   except razorpay.errors.SignatureVerificationError as e:
       # Payment signature verification failed
       # Handle the error accordingly
       return render(request, 'donate_failure.html')