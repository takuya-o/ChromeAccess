#!/usr/bin/env ruby
# -*- coding: utf-8-unix -*-

require 'rubygems'
require 'crxmake'

CrxMake.zip(
  :ex_dir => "./src",
  :pkey   => "./QuickAccess2.pem",
  :zip_output => "./QuickAccess2.zip",
  :verbose => true,
  :ignorefile => /(\.swp|.*~)/,
  :ignoredir => /\.(?:svn|git|cvs)/
)
