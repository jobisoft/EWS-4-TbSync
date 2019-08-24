About this Documentation
========================

This document tries to cover all aspects of how to create a provider add-on for TbSync to extends its sync capabilities. 

.. note::
  All TbSync provider add-ons are currently designed as *bootrapped extensions*, for which support is probably going to be dropped from Thunderbird at some time. We are working on migrating the TbSync API into a WebExtension API, so - hopefully - all provider add-ons can be converted into future proof *WebExtensions* without much effort.

:doc:`provider:introduction/introduction`
  This section gives a short introduction to TbSync and its provider concept.

:doc:`provider:getting_started/getting_started`
  As promised by the name, this section gets you started by explainig how to create your own basic provider add-on in just a couple of minutes and gives instructions to get it running in Thunderbird.

:doc:`implementing/api`
  Learn how to interact with TbSync.


.. toctree::
   :caption: Building a Provider Add-on
   :hidden:
   :maxdepth: 3
   
   Introduction <introduction/introduction>
   Getting Started <getting_started/getting_started>
   Implementing the Provider API <implementing/api>

.. toctree::
   :caption: References
   :hidden:
   :maxdepth: 3

   Class Definitions <classes>
   API Reference <https://tbsync.readthedocs.io/projects/api/en/latest/api.html>
