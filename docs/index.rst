About this Documentation
========================

This document tries to cover all aspects of how to create a provider add-on for TbSync to extends its sync capabilities. 

.. note::
  All TbSync provider add-ons are currently designed as *bootrapped extensions*, for which support is probably going to be dropped from Thunderbird at some time. We are working on migrating the TbSync API into a WebExtension API, so - hopefully - all provider add-ons can be converted into `MailExtensions <https://developer.thunderbird.net/add-ons/about-add-ons#mailextensions>`_ without much effort.

:doc:`introduction`
  This section gives a short introduction to TbSync and its provider concept.

:doc:`getting_started`
  As promised by the name, this section gets you started by explainig how to create your own basic provider add-on in just a couple of minutes and gives instructions to get it running in Thunderbird.

:doc:`api`
  Learn how to interact with TbSync and how to add sync capabilities to your provider add-on.


.. toctree::
   :hidden:
   :maxdepth: 2

   introduction
   getting_started
   api
